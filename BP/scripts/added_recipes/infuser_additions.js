import { system, world } from "@minecraft/server";

world.afterEvents.worldLoad.subscribe(() => {
    const newRecipes = {
        "utilitycraft:ryno_lead_plate|minecraft:concrete": { output: "utilitycraft:ryno_reactor_concrete", required: 4 },
        "utilitycraft:ryno_lead_plate|utilitycraft:compressed_glass": { output: "utilitycraft:ryno_reactor_glass", required: 4 }
    };

    system.sendScriptEvent("utilitycraft:register_infuser_recipe", JSON.stringify(newRecipes));
});