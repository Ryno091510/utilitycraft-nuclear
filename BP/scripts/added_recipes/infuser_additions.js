import { system, world } from "@minecraft/server";

world.afterEvents.worldLoad.subscribe(() => {
    const newRecipes = {
        "utilitycraft:lead_plate|minecraft:concrete": { output: "utilitycraft:reactor_concrete", required: 4 },
        "utilitycraft:lead_plate|utilitycraft:compressed_glass": { output: "utilitycraft:reactor_glass", required: 4 }
    };

    system.sendScriptEvent("utilitycraft:register_infuser_recipe", JSON.stringify(newRecipes));

    console.warn("[UC Nuclear] Custom infuser recipes registered via system event.");
});