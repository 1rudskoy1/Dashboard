import React, { useEffect, useRef } from "react";
import Skill from "../tools/Skill";
import { useDispatch, useSelector } from "react-redux";

const Canvas = () => {
    const canvasRef = useRef();
    const dispatch = useDispatch();
    const skills = useSelector(state => state.skills);
    useEffect(() => {
        new Skill(canvasRef.current);
    }, [])
    return(
        <canvas ref={canvasRef} id="canvas" width={1000} height={800}></canvas>
    )
}

export default Canvas;