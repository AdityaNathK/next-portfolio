import React, { useState } from "react";
import "./styles.css";

const TextEffect = () => {
    const [text, setText] = useState("SUBMIT");

    const handleMouseOver = (
        event: React.MouseEvent<HTMLHeadingElement, MouseEvent>
    ) => {
        let iteration = 0;
        let interval: NodeJS.Timeout | null = null;

        clearInterval(interval!);

        interval = setInterval(() => {
            setText((prevText) =>
                prevText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return (
                                event.currentTarget.dataset.value?.[index] ?? ""
                            );
                        }

                        return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[
                            Math.floor(Math.random() * 26)
                        ];
                    })
                    .join("")
            );

            if (iteration >= (event.currentTarget.dataset.value?.length ?? 0)) {
                clearInterval(interval!);
            }

            iteration += 1 / 3;
        }, 30);
    };

    return (
        <div>
            <h1 data-value="SUBMIT" onMouseOver={handleMouseOver}>
                {text}
            </h1>
        </div>
    );
};

export default TextEffect;
