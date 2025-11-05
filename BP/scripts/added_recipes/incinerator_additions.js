import { system, world } from "@minecraft/server";

world.afterEvents.worldLoad.subscribe(() => {
    const newRecipes = {
        "utilitycraft:raw_lead": { output: "utilitycraft:lead_ingot" }
    };

    system.sendScriptEvent("utilitycraft:register_furnace_recipe", JSON.stringify(newRecipes));

    console.warn("[UC Nuclear] Custom furnace recipes registered via system event.");
});