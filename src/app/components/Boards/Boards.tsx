import {useMemo} from "react";
import {Board} from "@/app/api/boards";
import styles from "./Boards.module.css"
import {Card} from "../Card/Card";

export const Boards = ({boards}: {boards: Board[] | null, }) => {
    if (!boards) return;
    const sortedBoards = useMemo(() => {
        return boards.toSorted((a, b) => {
            if (a.pos === b.pos) return 0
            return a.pos > b.pos ? 1 : -1;
        })
    }, [boards]);
    return (
        <ul className={styles.list}>
            {sortedBoards.map((board) => {
            const { id, title, thumbnails, workspaceId, parentId } = board;
            let thumbnail = null; // todo: add default background image or other treatment
            if (thumbnails && thumbnails.length) {
                thumbnail = thumbnails[0];
            }
            return (<Card key={id} href={`/${workspaceId}/${parentId}/${id}`} thumbnail={thumbnail} title={title} isSquare />);
       })}
       </ul>
    )
}

