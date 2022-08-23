import Diagram, {createSchema, useSchema} from 'beautiful-react-diagrams';
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {
    directionSelector,
    directionStarSelector,
    enterStarSelector,
    stenaStarSelector, tylStarSelector, usinStars
} from "../../slices/selectors/card-selectors";

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

const initialSchema = createSchema({
    nodes: [
        {
            id: 'nodeF',
            content: 'Огонь',
            coordinates: [151, 92],
            render: FireNode,
            /* outputs: [{id: 'fo-1', alignment: 'right'}],
             inputs: [{id: 'fi-1', alignment: 'left'}],*/
        },
        {
            id: 'nodeE',
            content: 'Земля',
            coordinates: [221, 36],
            render: EartchNode,

            /*outputs: [{id: 'eo-1', alignment: 'right'}],
            inputs: [{id: 'ei-1', alignment: 'left'}],*/
        },
        {
            id: 'nodeM',
            content: 'Металл',
            coordinates: [275, 90],
            render: MetallNode,

            /*outputs: [{id: 'mo-1', alignment: 'right'}],
            inputs: [{id: 'mi-1', alignment: 'left'}],*/
        },
        {
            id: 'nodeW',
            content: 'Вода',
            coordinates: [280, 162],
            render: WaterNode,

            /*outputs: [{id: 'wo-1', alignment: 'right'}],
            inputs: [{id: 'wi-1', alignment: 'left'}],*/
        },
        {
            id: 'nodeT',
            content: 'Дерево',
            coordinates: [160, 163],
            render: TreeNode,

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


    const starts = useSelector(usinStars);
    console.log("UncontrolledDiagram", starts);

    const hasTree = () => starts.includes(3) || starts.includes(4) ;
    const hasFire = () => starts.includes(9);

    const hasEarch = () => {
        return starts.includes(5) ||
            starts.includes(2) ||
            starts.includes(8);
    }

    const hasWater = () => starts.includes(1);

    const hasMetal = () => {
        return starts.includes(6) ||
            starts.includes(7)
    }

    let links = [];


    // create diagrams schema
    const [schema, {onChange}] = useSchema(initialSchema);


    useEffect( ()=>{

        if ((hasTree() && hasFire())) {
            links = [...links, {input: 'nodeT', output: 'nodeF', readonly: true}]
        }
        if (hasFire() && hasEarch()) {
            links = [...links, {input: 'nodeF', output: 'nodeE', readonly: true}]
        }
        if (hasEarch() && hasMetal()) {
            links = [...links, {input: 'nodeE', output: 'nodeM', readonly: true}]
        }
        if (hasMetal() && hasWater()) {
            links = [...links, {input: 'nodeM', output: 'nodeW', readonly: true}]
        }
        if (hasWater() && hasTree()) {
            links = [...links, {input: 'nodeW', output: 'nodeT', readonly: true}]
        }
        doUpdateShema();

    },[starts ])

    const doUpdateShema = () => {

        const newShema = {
            ...schema,
            links: [...links]
        }

        console.log('doUpdateShema', links);

        onChange(newShema);
    }

    return (
        <div style={{height: '22.5rem'}}>
            <Diagram schema={schema} onChange={doUpdateShema}/>
        </div>
    );
};

