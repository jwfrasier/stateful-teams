import React from "react";
import Student from "./Student";

export default function DefaultTeam({ students }) {
  return (
    <div className="defaultteam">
      <h1>Default</h1>

      {students?.map((student) => (
        <Student student={student} />
      ))}
    </div>
  );
}
