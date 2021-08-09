import { API } from 'aws-amplify';
import {listPlanners} from "./queries";
import {createPlanner, updatePlanner} from "./mutations";

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
        return await API.graphql({
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

    static async updatePlannerState (id, plannerState) {
        return await API.graphql({
            query: updatePlanner,
            variables: {
                input: {
                    id: id,
                    state: plannerState
                }
            }
        })
    }
}

export default PlannerQueries;