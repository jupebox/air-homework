'use client';
import {BoardsListResponse, fetchBoards} from "@/app/api/boards";
import {useEffect, useState} from "react";

// import {Boards} from "./components/Boards/Boards";
import {ToggleSection} from "./components/ToggleSection/ToggleSection";
import {ClipsListResponse, fetchAssets} from "./api/clips";
import {Boards} from "./components/Boards/Boards";
import {Assets} from "./components/Assets/Assets";

export default function Home() {
  // todo: put these into reusable hooks
  const [boards, setBoards] = useState<BoardsListResponse | null>(null);
  const [assets, setAssets] = useState<ClipsListResponse | null>(null);
  useEffect(() => {
      const loadInitialItems = async () => {
          const fetchedBoards = await fetchBoards();
          if (!fetchedBoards) {
              // todo: error handling; possible retry mechanism
          }
          setBoards(fetchedBoards);

          const fetchedAssets = await fetchAssets({cursor: assets ? assets.pagination.cursor : null});
          if (!fetchedAssets) {
              // todo: error handling; possible retry mechanism
          }
          setAssets(fetchedAssets);
      }
      loadInitialItems();
  }, []);

  return <main>
    <ToggleSection id="boards" hasLoaded={!!boards} itemQuantity={boards ? boards.data.length : 0} initialIsExpanded name="Boards"><Boards boards={boards ? boards.data : null} /></ToggleSection>
    <ToggleSection id="assets" hasLoaded={!!assets} itemQuantity={assets ? assets.data.total : 0} initialIsExpanded name="Assets"><Assets assets={assets ? assets.data.clips : null} /></ToggleSection>
  </main>;
}
