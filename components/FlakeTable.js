import styled from "styled-components";
import Link from "next/link";
import useSWR from "swr";
import { deleteFlake, updateFlake } from "@/lib/api";
import { useState } from "react";

export default function FlakeTable() {
  const { data: flakes, isLoading, error, mutate } = useSWR("/api/flakes");
  const [editMode, setEditMode] = useState({});

  const [editName, setEditName] = useState();
  const [editBrand, setEditBrand] = useState();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!flakes) {
    return;
  }

  function handleDelete(id) {
    deleteFlake(id);
    mutate();
  }

  function handleEdit(id) {
    setEditMode({ id, isEditMode: !editMode.isEditMode });
  }

  async function handleSave(id) {
    updateFlake(id, { name: editName, brand: editBrand });

    mutate();
    setEditMode({});
    setEditName("");
    setEditBrand("");
  }

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>brand</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        {flakes?.map((flake) => {
          return (
            <tr key={flake._id}>
              {editMode.id === flake._id ? (
                <>
                  <td>
                    <input
                      type="text"
                      placeholder={flake.name}
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder={flake.brand}
                      value={editBrand}
                      onChange={(e) => setEditBrand(e.target.value)}
                    />
                  </td>
                </>
              ) : (
                <>
                  <td>{flake.name}</td>
                  <td>{flake.brand}</td>
                </>
              )}
              <td>
                <button onClick={() => handleDelete(flake._id)}>Delete</button>
                {editMode.id === flake._id ? (
                  <button onClick={() => handleSave(flake._id)}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(flake._id)}>Edit</button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const StyledList = styled.ul`
  list-style-type: none;
`;
