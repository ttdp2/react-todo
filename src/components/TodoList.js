import React, { useState, useContext } from "react";
import Title from "./Title";
import Footer from "./Footer";
import Header from "./Header";
import FilteredList from "./FilteredList";
import Info from "./Info";
import { FILTER_ALL } from "../services/filter";
import { applyFilter, applySearch } from "../services/filter";
import TodoContext from "./TodoContext";

export default function TodoList(props) {
    const value = useContext(TodoContext)

    const { title, addTodo, updateTodo, mode, changeMode } = props;
    const [query, setQuery] = useState("")
    const [filter, setFilter] = useState(FILTER_ALL)

    function handleSearch(str) {
        setQuery(str)
    }

    function handleFilter(str) {
        setFilter(str)
    }

    return (
        <div className="todolist">
            <Title title={title} />
            <Header mode={mode} query={query} addTodo={addTodo} changeSearch={handleSearch} />
            <FilteredList list={applySearch(applyFilter(value.list, filter), query)} updateTodo={updateTodo} />
            <Footer mode={mode} count={value.list.length} filter={filter} changeFilter={handleFilter} changeMode={changeMode} />
            <Info mode={mode} />
        </div>
    )
}