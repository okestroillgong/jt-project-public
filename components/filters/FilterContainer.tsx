import FilterGridRow from "./FilterGridRow";
import FilterWrapper from "./FilterWrapper";
import type { Filter, FilterLayout } from "./types";

export type { FilterLayout };

type FilterContainerProps = {
  filterLayout: FilterLayout;
  values: Record<string, any>;
  onChange: (name: string, value: any) => void;
};

export function FilterContainer({
  filterLayout,
  values,
  onChange,
}: FilterContainerProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border px-4 py-4">
      {filterLayout.map((row, rowIndex) => {
        if ("type" in row && row.type === "grid") {
          return (
            <div key={rowIndex}>
              <FilterGridRow {...row} values={values} onChange={onChange} />
            </div>
          );
        }

        if (Array.isArray(row)) {
          return (
            <div
              key={rowIndex}
              className="flex flex-row flex-wrap items-center gap-x-8 gap-y-4"
            >
              {row.map((filter) => {
                if (filter.type === 'custom') {
                  return (
                    <div key={filter.name} className={filter.className}>
                      {filter.render ? filter.render() : null}
                    </div>
                  );
                }
                return (
                  <FilterWrapper
                    key={filter.name}
                    {...filter}
                    value={values[filter.name]}
                    onChange={onChange}
                  />
                );
              })}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
