import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { getCategories, deleteCategory } from "./helper/adminapicall";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const { user, token } = isAuthenticated();
  const [err, seterr] = useState(false);
  const preload = () => {
    getCategories().then((data) => {
      //console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
        //console.log(categories);
      }
    });
  };
  useEffect(() => {
    preload();
  }, []);

  const deleteThisCategory = (categoryid) => {
    deleteCategory(categoryid, user._id, token)
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          seterr(true);
        } else {
          preload();
        }
      })
      .catch((err) => console.log(err));
  };
  const errorMessage = () => {
    if (err) {
      return <h4 className="text-success">Failed to Delete Category</h4>;
    }
  };
  return (
    <Base title="Welcome admin" description="Manage products here">
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      {errorMessage()}
      <h2 className="mb-4">All Categories:</h2>

      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-white my-3">
            Total Number of Products: {categories.length}
          </h2>

          {categories.map((category, index) => {
            return (
              <div key={index} className="row text-center mb-2 ">
                <div className="col-4">
                  <h3 className="text-white text-left">{category.name}</h3>
                </div>
                <div className="col-4">
                  <Link
                    className="btn btn-success"
                    to={`/admin/category/update/${category._id}`}
                  >
                    <span className="">Update</span>
                  </Link>
                </div>
                <div className="col-4">
                  <button
                    onClick={() => {
                      deleteThisCategory(category._id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default ManageCategories;
