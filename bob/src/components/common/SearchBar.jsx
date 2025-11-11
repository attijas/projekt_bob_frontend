import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const SearchBar = () => {
    return (
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-12 col-md-6 col-lg-4">
                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">

                            <div class="carousel-item active">
                                <div class="d-flex justify-content-center gap-3 py-5">
                                    <a href="/strona1" class="btn btn-primary btn-lg">Przejdź do strony 1</a>
                                    <a href="/strona2" class="btn btn-success btn-lg">Przejdź do strony 2</a>
                                    <a href="/strona3" class="btn btn-warning btn-lg">Strona 3</a>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="d-flex justify-content-center gap-3 py-5">
                                    <a href="/raporty" class="btn btn-secondary btn-lg">Raporty</a>
                                    <a href="/uzytkownicy" class="btn btn-primary btn-lg">Użytkownicy</a>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="d-flex justify-content-center gap-3 py-5">
                                    <a href="/pomoc" class="btn btn-info btn-lg">Pomoc</a>
                                    <a href="/kontakt" class="btn btn-danger btn-lg">Kontakt</a>
                                </div>
                            </div>

                        </div>

                        <button class="carousel-control-prev" type="button"
                            data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                        </button>
                        <button class="carousel-control-next" type="button"
                            data-bs-target="#carouselExample" data-bs-slide="next">
                            <span class="carousel-control-next-icon"></span>
                        </button>
                    </div>
                    <form>
                        <div class="mb-3 d-flex">
                            <input
                                type="search"
                                class="form-control"
                                id="searchInput"
                                aria-describedby="searchHelp"
                                placeholder="Wyszukaj"
                            />
                            <button type="submit" class="btn btn-primary ms-md-3">Szukaj</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>


    );


};
export default SearchBar;
