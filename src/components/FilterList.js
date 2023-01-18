import { Button } from "react-bootstrap";
import React from "react";

const FilterList = ({ updateFilter }) => {
  return (
    <div >
      <Button className="me-3 mb-2" size="sm" variant="danger" onClick={()=>updateFilter("All")}>All</Button>
      <Button className="me-3 mb-2" size="sm" variant="success"  onClick={()=>updateFilter("Done")}>Done</Button>
      <Button className="me-3 mb-2" size="sm"  onClick={()=>updateFilter("Uncompleted")}>Uncompleted</Button>
    </div>
  );
};

export default FilterList;
