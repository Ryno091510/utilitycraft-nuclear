import { system, world } from "@minecraft/server";

world.afterEvents.worldLoad.subscribe(() => {
    const newRecipes = {
        "utilitycraft:ryno_raw_lead": { output: "utilitycraft:ryno_lead_ingot" }
    };

    system.sendScriptEvent("utilitycraft:register_furnace_recipe", JSON.stringify(newRecipes));
});