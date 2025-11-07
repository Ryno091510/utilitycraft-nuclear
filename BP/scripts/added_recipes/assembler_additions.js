import { system, world } from "@minecraft/server";

world.afterEvents.worldLoad.subscribe(() => {
    // Add or replace Crafter recipes dynamically
    const newRecipes = {
        // Normal shaped recipe (3x3)
        "ryno_lead_plate,ryno_lead_ingot,ryno_lead_plate,ryno_lead_plate,utiltycraft:ryno_reactor_glass,ryno_lead_plate,ryno_lead_plate,ryno_lead_ingot,ryno_lead_plate": {
            output: "utilitycraft:ryno_empty_fuel_cell",
            amount: 1
        }
    };
    system.sendScriptEvent("utilitycraft:register_crafter_recipe", JSON.stringify(newRecipes));
});