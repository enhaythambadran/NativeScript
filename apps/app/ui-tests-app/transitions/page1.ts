import * as frame from "ui/frame";

export function onTap(args) {
    var navigationEntry = {
        moduleName: "ui-tests-app/transitions/page0",
        animated: true,
        transition: {
            name: args.object.tag,
            duration: 380,
            curve: "easeIn"
        }
    };
    frame.topmost().navigate(navigationEntry);
}
