import Filter from "./Filter.tsx";
import Feed from "./Feed.tsx";
import { useEffect, useRef, useState, useMemo } from "react";
import DisappearingText from "../DisappearingText.tsx";
import fetchQuizzes from "../../firebase_services/FetchQuizzes.ts";
import { QueryDocumentSnapshot } from "firebase/firestore";
import type { QuizMetadata } from "../../types/quiz.ts";

export default function SearchSection() {
  const [scrollMode, setScrollMode] = useState(false); // used for disappearing text
  const [pendingSearchValue, setPendingSearchValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [feedQuizData, setFeedQuizData] = useState<QuizMetadata[]>([]);

  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const requestIdRef = useRef(0);

  //debounce
  useEffect(() => {
    const handle = setTimeout(() => setSearchValue(pendingSearchValue), 300);
    return () => clearTimeout(handle);
  }, [pendingSearchValue]);

  useEffect(() => {
    loadMoreQuizzes();
  }, []);

  const loadMoreQuizzes = async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);

    const currentRequestId = ++requestIdRef.current;
    const result = await fetchQuizzes(10, lastDoc);

    if (currentRequestId !== requestIdRef.current) {
      setIsLoading(false);
      return;
    }

    if (result.data.length > 0) {
      setFeedQuizData((prev) => {
        const existingIds = new Set(prev.map((q) => q.id));
        const newUnique = result.data.filter((q) => !existingIds.has(q.id));
        return [...prev, ...newUnique];
      });
      setLastDoc(result.last);
    }

    if (result.snapshotSize < 10 || !result.last) {
      setHasMore(false);
    }

    setIsLoading(false);
  };

  const handleFeedScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.currentTarget;

    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight;
    const clientHeight = target.clientHeight;

    const isNearBottom = scrollTop + clientHeight >= scrollHeight - 300;

    if (isNearBottom && !isLoading && hasMore) {
      loadMoreQuizzes();
    }

    setScrollMode(true);
  };

  const handleSearchChange = (value: string) => {
    setScrollMode(true);
    setPendingSearchValue(value);
  };

  const displayQuizData = useMemo(() => {
    if (!searchValue) return feedQuizData;
    const term = searchValue.toLowerCase();
    return feedQuizData.filter((q) => {
      const fields = [
        (q as any).title,
        (q as any).name,
        (q as any).category,
        (q as any).description,
      ].filter(Boolean);
      return fields.some((v) => String(v).toLowerCase().includes(term));
    });
  }, [searchValue, feedQuizData]);

  useEffect(() => {
    if (searchValue && displayQuizData.length < 5 && hasMore && !isLoading) {
      loadMoreQuizzes();
    }
  }, [searchValue, displayQuizData.length, hasMore, isLoading]);

  return (
    <>
      <DisappearingText isVisible={scrollMode} />
      <Filter handleChange={handleSearchChange} />
      <div className="overflow-hidden ">
        <Feed
          handleScroll={handleFeedScroll}
          quizData={displayQuizData}
          isLoading={isLoading}
          hasMore={hasMore}
        />
      </div>
    </>
  );
}
