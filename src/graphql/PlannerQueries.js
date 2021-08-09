import { API } from 'aws-amplify';
import {listPlanners, getPlannerByEmail} from "./queries";
import {createPlanner, updatePlanner, deletePlanner} from "./mutations";

class PlannerQueries {

    static async allPlanners() {
        const planners = await API.graphql({ query: listPlanners });
        return planners;
    }

    static async findPlannerByUser(username) {
        const filter = {
            email: {eq: username}
        };
        const planner = await API.graphql({
            query: listPlanners,
            variables: {
                filter: filter
            }
        });
        return planner;
    }

    static async createPlanner(plannerState, email, accessExpires) {
        await API.graphql({
            query: createPlanner,
            variables: {
                input: {
                    state: plannerState,
                    email: email,
                    accessExpires: accessExpires
                }
            }
        })
    }
}

export default PlannerQueries;