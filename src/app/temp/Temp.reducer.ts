import { GET_TEMPLATES, ADD_ITEM, REMOVE_ITEM } from "./Temp.actionTypes";
import { tempDefaultState } from "./Temp.store";

export const tempReducer = (state = tempDefaultState, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case GET_TEMPLATES: {
            const { templates } = payload;

            return {
                ...state,
                templates,
            };
        }

        case ADD_ITEM: {
            const { templates } = state;
            const { template } = payload;

            return {
                ...state,
                templates: [...templates, template],
            };
        }

        case REMOVE_ITEM: {
            const { id } = payload;
            const { templates } = state;

            const newTemplates = templates.filter(t => t.id !== id);

            return {
                ...state,
                templates: newTemplates,
            };
        }
    
        default:
            return state;
    }
}