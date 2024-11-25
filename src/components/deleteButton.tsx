"use client"

import { deleteDoc } from "../app/api/deleteBlog";
import { Button } from "./ui/button";

export default function DeleteButton(props: {id: string}) {

    const handleClick = async () => {
        await deleteDoc(props.id)
        window.location.reload(); 
    };

    return (
      <div >
        <Button onClick={handleClick}>Delete</Button>
        </div>
    );
  }
