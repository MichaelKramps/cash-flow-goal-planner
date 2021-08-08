import { API } from 'aws-amplify';
import {listPlanners} from "./queries";
import {createPlanner, updatePlanner, deletePlanner} from "./mutations";

class PlannerQueries {

    static async allPlanners() {
        const planners = await API.graphql({ query: listPlanners });
        return planners;
    }

    static async findUsersPlanner(username) {
        return null;
    }
}