import React from "react";  
import Link from "next/link"  
import Query from "../utils/apollo";  
import CATEGORIES_QUERY from "../utils/queries";

const Nav = () => {  
  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
            return (
                <ul className="uk-navbar-nav">
                    {categories.map((category, i) => {
                      return (
                        <li key={category.id}>
                          <Link
                            href={{
                              pathname: "category",
                              query: { id: category.id }
                            }}
                          >
                            <a className="uk-link-reset">{category.name}</a>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
            )
        }}
      </Query>
    </div>
  );
};

export default Nav; 