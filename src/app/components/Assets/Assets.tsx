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
    return (
        <ul className={styles.list}>
            {assets.map((asset) => {
                // todo: use height and width to set aspect ratios
                console.log(asset);
            const { id, assetId, title, height, width, workspaceId, assets: thumbs, type, source } = asset;
    
            return (<Card key={id} href={`/${workspaceId}/${id}`} thumbnail={thumbs.image} title={title || assetId} isSquare={false} height={height} width={width} />);
       })}
       </ul>
    )
}

