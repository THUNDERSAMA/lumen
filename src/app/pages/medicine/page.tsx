"use client";
import { Providers } from "@/app/Providers";
import Translate from "@/app/Translate";
import { getTranslation } from "@/app/utils/TranslationUtils";
import { decrypt } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import router from "next/router";
import Cookies from "js-cookie";
import { MouseEventHandler, useEffect, useState } from "react";
import KeyOffIcon from "@mui/icons-material/KeyOff";
import KeyIcon from "@mui/icons-material/Key";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

type SearchPageProps = {};

const SearchPage: React.FC<SearchPageProps> = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle search functionality here
  };

  return (
    <div className="vbn">
      <div className="container">
        <div className="search-bar">
          <form onSubmit={handleSearch}>
            <input
              id="search-input"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button id="search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="content-container">
          {/* content will be displayed here */}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
