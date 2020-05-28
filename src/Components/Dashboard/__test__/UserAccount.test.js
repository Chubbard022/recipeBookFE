import UserAccount from "../UserAccount"
import * as actions from "../../../Actions/recipe"
import getRecipeMock from "./__mock__/getRecipeMock"

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios';
import expect from "expect"



const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('getPosts actions', () => {

    beforeEach(function () {
      moxios.install();
    });
  
    afterEach(function () {
      moxios.uninstall();
    });
  
    it('creates GET_RECIPES after successfuly fetching posts', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: getRecipeMock,
        });
      });
      console.log(getRecipeMock)
      const expectedActions = [
        { type: actions.GET_RECIPE },
        { type: actions.GET_RECIPE_SUCCESS, posts: getRecipeMock },
      ];
  
      const store = mockStore({ recipes: []})
  
      return store.dispatch(actions.getRecipes()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
