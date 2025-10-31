import { system, world } from "@minecraft/server";

world.afterEvents.worldLoad.subscribe(() => {
    const newRecipes = {
        "utilitycraft:lead_ingot": { output: "utlitycraft:lead_plate", required: 4 },
    };

    system.sendScriptEvent("utilitycraft:register_press_recipe", JSON.stringify(newRecipes));

    console.warn("[Addon] Custom press recipes registered via system event.");
});