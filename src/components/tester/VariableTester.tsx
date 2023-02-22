export const VariableTester = () => {
    
    let obj: any = { "key1": 1 };
    obj["key2"] = 10;
    obj.key3 = 100;
    for (var i = 1; i <= 3; i++) {
        console.log("key" + i, obj["key" + i]);
    }

    return (<>
        <h3>Variable tester</h3>
        <p>Watch console for more info.</p>
    </>);
};