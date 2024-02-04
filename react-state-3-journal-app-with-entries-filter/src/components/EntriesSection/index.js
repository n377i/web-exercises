import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { Fragment } from "react";

export default function EntriesSection({
  entries,
  onToggleFavorite,
  onShowAllEntries,
  onShowFavoriteEntries,
  filter,
  allEntriesCount,
  favoriteEntriesCount,
}) {
  const favoriteEntries = entries.filter((entry) => entry.isFavorite);

  return (
    <section className="entries-section">
      <Tabs>
        <Tab active={filter === "all"} onClick={onShowAllEntries} filter="all">
          All Entries <Badge isActive>{allEntriesCount}</Badge>
        </Tab>
        <Tab
          active={filter === "favorites"}
          onClick={onShowFavoriteEntries}
          filter="favorites"
        >
          Favorites <Badge>{favoriteEntriesCount}</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {filter === "all"
          ? entries.map((entry, index) => (
              <Fragment key={entry.id}>
                {index > 0 ? <Divider /> : null}
                <Entry
                  date={entry.date}
                  motto={entry.motto}
                  notes={entry.notes}
                  onToggleFavorite={() => onToggleFavorite(entry.id)}
                  id={entry.id}
                  isFavorite={entry.isFavorite}
                />
              </Fragment>
            ))
          : filter === "favorites"
          ? favoriteEntries.map((entry, index) => (
              <Fragment key={entry.id}>
                {index > 0 ? <Divider /> : null}
                <Entry
                  date={entry.date}
                  motto={entry.motto}
                  notes={entry.notes}
                  onToggleFavorite={() => onToggleFavorite(entry.id)}
                  id={entry.id}
                  isFavorite={entry.isFavorite}
                />
              </Fragment>
            ))
          : null}
      </div>
    </section>
  );
}
