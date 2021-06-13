import React from "react";
import '../App.css';

export const formateDate = (date) => {
    return new Date(Date.parse(date)).toLocaleString("fr-CH",{
        day: "numeric",
        year: "numeric",
        month: "numeric",
    });
};

export const calculDate = (datedebut, datefin) => {

    return new Number((new Date(datefin).getTime() - new Date(datedebut).getTime()) / 31536000000).toFixed(0);
};
