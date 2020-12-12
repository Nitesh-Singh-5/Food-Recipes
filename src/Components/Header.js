import react from "react";

const Header = (props) => {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">
          <span class="material-icons Food-icon display-4">fastfood</span>Food
          Recipes
        </h1>
        <p className="lead">
          Want to craft your own creative meat-free meals? Get inspiration from
          other food lovers, or share your own masterpieces! Transform into a
          master chef now.
        </p>
        <div class="input-group w-50 mx-auto">
            <input type="text" class="form-control" placeholder="Search your recipe.." value={props.search} onChange={props.onInputChange}/>
          <button className="btn btn-success">Search Recipe</button>
        </div>
      </div>
    </>
  );
};

export default Header;
