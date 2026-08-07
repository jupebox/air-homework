import {useMemo, useState} from "react";
import styles from "./Assets.module.css"
import {Card} from "../Card/Card";
import {Clip} from "@/app/api/clips";

export const Assets = ({assets}: {assets: Clip[] | null, }) => {
    if (!assets) return;
    // this was (non-functional) prep work to allow users to change the order of assets with drag and drop
    // const [assetIds, setAssetIds] = useState<string[]>(assets.map(asset => asset.id));
    // const sortedAssets = useMemo(() => {
    //     return assetIds.map(id => {
    //         assets.find((asset) => asset.id === id);
    //     })
    // }, [assetIds]);

    // pulling resize logic out of "card" so it can be run once in aggregate against entire list, rather than on every single card
    // especially since an individual card has no concept of the other cards around it and therefore what size it should be
    // this will go into a hook later. just staging it here for now
    //  const cardStyle = useMemo(() => {
    //     return;
    //     if (!height || !width) {
    //         return;
    //     }
    //     // this is VERY rough
    //     // const isHeightBigger = height > width;
    //     let newHeight = 280;
    //     const ratio = width / height;
    //     const newWidth = ratio * newHeight;

    //     return {
    //         height: `${newHeight}px`,
    //         minWidth: `${newWidth}px`
    //     };
    // }, [height, width]);
    return (
        <ul className={styles.list}>
            {assets.map((asset) => {
                // todo: use height and width to set aspect ratios
                console.log(asset);
            const { id, assetId, title, height, width, workspaceId, assets: thumbs, type, source } = asset;
    
            return (<Card key={id} href={`/${workspaceId}/${id}`} thumbnail={thumbs.image} title={title || assetId} titleStyle='hover' />);
       })}
       </ul>
    )
}

