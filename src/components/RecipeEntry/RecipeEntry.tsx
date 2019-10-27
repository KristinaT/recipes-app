import React from "react";
import {
  RecipeDiv,
  RecipeHeader,
  RecipeLabel,
  RecipeInput,
  RecipeTextarea,
  RecipeButton
} from "./RecipeEntryStyles";
import { Recipe } from "../../redux/reducers/recipesReducer";
import { MapDispatchToProps, connect } from "react-redux";
import { addRecipe, addRecipeAsync } from "../../redux/actions/recipeActions";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

interface OwnProps extends RouteComponentProps {}
interface StateProps {}
interface DispatchProps {
  addRecipe: (recipe: Recipe) => void;
  addRecipeAsync: (recipe: Recipe) => any;
}

type Props = OwnProps & StateProps & DispatchProps;

class RecipeEntry extends React.Component<Props> {
  state: Recipe = {
    name: "",
    source: "",
    ingredients: [],
    preparationTime: "",
    preparationInstructions: ""
  };

  handleField = (event: any) => {
    event.preventDefault();

    switch (event.target.id) {
      case "name":
        this.setState({ name: event.target.value });
        break;
      case "source":
        this.setState({ source: event.target.value });
        break;
      case "prepTime":
        this.setState({ preparationTime: event.target.value });
        break;
      case "prepInstructions":
        this.setState({ preparationInstructions: event.target.value });
        break;
      default:
        break;
    }
  };

  clearState = (callback: () => void) => {
    this.setState(
      {
        name: "",
        source: "",
        ingredients: [],
        preparationTime: "",
        preparationInstructions: ""
      },
      callback
    );
  };

  addRecipe = async () => {
    const { addRecipeAsync, history } = this.props;

    // addRecipe(this.state);

    await addRecipeAsync(this.state);
    this.clearState(() => {
      history.push("/");
    });
  };

  render() {
    return (
      <div>
        <RecipeDiv>
          <Link to="/"> Back </Link>
          <RecipeHeader> Recipe entry </RecipeHeader>
          <RecipeLabel>
            Name:
            <RecipeInput
              id="name"
              value={this.state.name}
              onChange={this.handleField}
              type="text"
              name="name"
            />
          </RecipeLabel>
          <RecipeLabel>
            Source:
            <RecipeInput
              id="source"
              value={this.state.source}
              onChange={this.handleField}
              type="text"
              name="source"
            />
          </RecipeLabel>
          <RecipeLabel>
            Preparation time:
            <RecipeInput
              id="prepTime"
              value={this.state.preparationTime}
              onChange={this.handleField}
              type="text"
              name="time"
            />
          </RecipeLabel>
          <RecipeLabel>Preparation instructions:</RecipeLabel>
          <RecipeTextarea
            id="prepInstructions"
            value={this.state.preparationInstructions}
            onChange={this.handleField}
            name="instructions"
          />
          <RecipeButton onClick={this.addRecipe} type="button" value="Add" />
        </RecipeDiv>
      </div>
    );
  }
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  addRecipe,
  addRecipeAsync
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(RecipeEntry)
);
