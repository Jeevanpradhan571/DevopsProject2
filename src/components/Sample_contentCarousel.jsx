import React from "react";
import ContentTile from "./ContentTile";
import ContentTileData from "./ContentTileData";

function abc(data) {
  return <ContentTile poster={data.poster} />;
}

function ContentCarousel() {
  return (
    <div style={{ marginBottom: 48 }}>
      <div
        style={{
          marginLeft: 72,
          marginRight: 72,
          paddingBottom: 16,
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          position: "relative",
        }}
      >
        <h2
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          Movies List
        </h2>
      </div>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateAreas: "left right",
            gridTemplateColumns: "repeat(2,48)",
            gridTemplateRows: "1fr",
            justifyContent: "space-between",
            overflow: "hidden",
            minWidth: 320,
          }}
        >
          <button
            onClick={() => {
              document.getElementById("container").scrollLeft -= 1400;
            }}
            style={{
              gridArea: "left",
              alignItems: "center",
              cursor: "pointer",
              display: "grid",
              justifyItems: "center",
              margin: 0,
              maxWidth: 30,
              backgroundColor: "transparent",
              zIndex: 20,
              position: "relative",
            }}
          >
            left
          </button>
          <ul
            id="container"
            style={{
              gridColumnStart: "left-start",
              gridColumnEnd: "right-end",
              gridRowStart: 1,
              gridRowEnd: "auto",
              zIndex: 1,
              alignItems: "flex-start",
              display: "flex",
              flexDirection: "row",
              scrollSnapType: "x proximity",
              listStyle: "none",
              overflowX: "scroll",
              scrollBehavior: "smooth",
              padding: "72 72",
              margin: 0,
            }}
          >
            {ContentTileData.map(abc)}
          </ul>
          <button
            onClick={() => {
              document.getElementById("container").scrollLeft += 1400;
            }}
            style={{
              gridArea: "right",
              alignItems: "center",
              cursor: "pointer",
              display: "grid",
              justifyItems: "center",
              margin: 0,
              maxWidth: 30,
              padding: 0,
              backgroundColor: "transparent",
              zIndex: 20,
              position: "relative",
            }}
          >
            right
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContentCarousel;