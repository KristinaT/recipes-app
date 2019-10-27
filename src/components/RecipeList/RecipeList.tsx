import React, { useEffect } from "react";
import {
  MapStateToProps,
  connect,
  MapDispatchToProps,
  useSelector
} from "react-redux";
import { Recipe } from "../../redux/reducers/recipesReducer";
import { getRecipes } from "../../redux/selectors/recipesSelectors";
import { Link } from "react-router-dom";
import { StoreState } from "../../redux/store";
import {
  RecipeDiv,
  RecipeHeader,
  RecipeLabel
} from "../RecipeEntry/RecipeEntryStyles";

import { fetchRecipes } from "../../redux/actions/recipeActions";

interface OwnProps {}
interface StateProps {
  recipes: Recipe[];
}
interface DispatchProps {
  fetchRecipes: () => (dispatch: any) => void;
}

type Props = OwnProps & StateProps & DispatchProps;

const RecipeList: React.FC<Props> = ({ recipes, fetchRecipes }) => {
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div>
      <Link to="/entry">Add a recipe</Link>
      <RecipeDiv>
        <RecipeHeader>Recipe List</RecipeHeader>
        {recipes.map((recipe: Recipe) => {
          return <RecipeLabel key={recipe.id}>{recipe.name}</RecipeLabel>;
        })}
      </RecipeDiv>
    </div>
  );
};

// class RecipeList extends React.Component<Props> {
//   componentDidMount() {
//     const { fetchRecipes } = this.props;
//     fetchRecipes();
//   }
//   render() {
//     const { recipes } = this.props;

//     return (
//       <div>
//         <Link to="/entry">Add a recipe</Link>
//         <RecipeDiv>
//           <RecipeHeader>Recipe List</RecipeHeader>
//           {recipes.map((recipe: Recipe) => {
//             return <RecipeLabel key={recipe.id}>{recipe.name}</RecipeLabel>;
//           })}
//         </RecipeDiv>
//       </div>
//     );
//   }
// }

const mapStateToProps: MapStateToProps<
  StateProps,
  OwnProps,
  StoreState
> = state => ({
  recipes: getRecipes(state)
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch: any
) => ({
  fetchRecipes: () => dispatch(fetchRecipes()) // go over this part
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeList);
