import Diagram, {createSchema, useSchema} from 'beautiful-react-diagrams';
import React from "react";

const FireNode = (props) => {
    const {inputs} = props;

    return (
        <div style={{background: "darkred", borderRadius: '40px'}}>
            <div style={{padding: '10px', color: 'white'}}>
                Огонь
            </div>
        </div>
    );
};

const EartchNode = (props) => {


    return (
        <div style={{background: "darkorange", borderRadius: '40px'}}>
            <div style={{padding: '10px', color: 'white'}}>
                Земля
            </div>
        </div>
    );
};

const WaterNode = (props) => {
    const {inputs} = props;

    return (
        <div style={{background: "darkblue", borderRadius: '40px'}}>
            <div style={{padding: '10px', color: 'white'}}>
                Вода
            </div>
        </div>
    );
};

const MetallNode = (props) => {
    const {inputs} = props;

    return (
        <div style={{background: "darkgray", borderRadius: '40px'}}>
            <div style={{padding: '10px', color: 'white'}}>
                Металл
            </div>
        </div>
    );
};

const TreeNode = (props) => {
    const {inputs} = props;

    return (
        <div style={{background: "darkgreen", borderRadius: '40px'}}>
            <div style={{padding: '10px', color: 'white'}}>
                Дерево
            </div>
        </div>
    );
};

/*const CustomNode = (props) => {
    const {inputs} = props;

    return (
        <div style={{background: 'red', borderRadius: '40px'}}>
            <div style={{padding: '10px', color: 'white'}}>
                Custom Node
            </div>
            <div style={{marginTop: '20px'}}>
                {inputs.map((port) => React.cloneElement(port, {
                    style: {width: '50px', height: '25px', background: '#1B263B'}
                }))}
            </div>
        </div>
    );
};*/

const initialSchema = createSchema({
    nodes: [
        {
            id: 'nodeF',
            content: 'Огонь',
            coordinates: [150, 60],
            render: FireNode,
           /* outputs: [{id: 'fo-1', alignment: 'right'}],
            inputs: [{id: 'fi-1', alignment: 'left'}],*/
        },
        {
            id: 'nodeE',
            content: 'Земля',
            coordinates: [250, 60],
            render:EartchNode,

            /*outputs: [{id: 'eo-1', alignment: 'right'}],
            inputs: [{id: 'ei-1', alignment: 'left'}],*/
        },
        {
            id: 'nodeM',
            content: 'Металл',
            coordinates: [350, 100],
            render:MetallNode,

            /*outputs: [{id: 'mo-1', alignment: 'right'}],
            inputs: [{id: 'mi-1', alignment: 'left'}],*/
        },
        {
            id: 'nodeW',
            content: 'Вода',
            coordinates: [250, 160],
            render:WaterNode,

            /*outputs: [{id: 'wo-1', alignment: 'right'}],
            inputs: [{id: 'wi-1', alignment: 'left'}],*/
        },
        {
            id: 'nodeT',
            content: 'Дерево',
            coordinates: [60, 160],
            render:TreeNode,

            /*outputs: [{id: 'to-1', alignment: 'left'}],
            inputs: [{id: 'ti-1', alignment: 'right'}],*/
        },
    ],
    links: []
});

/*links: [
    { input: 'nodeT',  output: 'nodeF',  readonly: true },
    { input: 'nodeF',  output: 'nodeE',  readonly: true },

    { input: 'nodeE',  output: 'nodeM', readonly: true, className: 'my-custom-link-class' },
    { input: 'nodeM',  output: 'nodeW',  readonly: true },
    { input: 'nodeW',  output: 'nodeT',  readonly: true, className: 'my-custom-link-class' },

]*/

export const UncontrolledDiagram = () => {
    // create diagrams schema
    const [schema, {onChange}] = useSchema(initialSchema);

    const doUpdateShema=()=>{

        console.log('doUpdateShema');
        const newShema = {...schema,
                         links:[{ input: 'nodeT',  output: 'nodeF',  readonly: true },]


        }
        onChange(newShema);
    }

    return (
        <div style={{height: '22.5rem'}}>
            <Diagram schema={schema} onChange={doUpdateShema}/>
        </div>
    );
};

