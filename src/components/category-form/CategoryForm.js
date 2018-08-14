import React from 'react'
// import { categoryCreate } from '../../action/actions.js'
// import { connect } from 'react-redux';
/*
should display a CategoryForm for adding categories to the app state

*/

export default class CategoryForm extends React.Component {
    constructor(props) {
        super(props)
        // id ?
        // date ?
        // this.state = {
        //     name : '',
        //     budget : ''
        // }
        this.configurePayload = this.configurePayload.bind(this)
    }
    configurePayload(e) {
        e.preventDefault()

        let payload = {
            name : e.target.name.value,
            budget : e.target.budget.value
        }
        this.props.categoryCreate(payload);
        document.getElementById('form').reset();


        // console.log('name val: ',e.target.name.value)
        // console.log('budget val: ',e.target.budget.value)
        // let name = e.target.name.value;
        // let budget = e.target.budget.value;
        // this.setState({
        //     name,
        //     budget
        // },()=>{console.log('state', this.props.category)})
        // this.props.categoryTest()
        // console.log('state', this.state)
        // this.props.categoryCreate(this.state)
        // console.log(this.props.category)
    }
    render() {
        return(
            <React.Fragment>
                <h2>Create Category</h2>
                <form id="form" onSubmit={this.configurePayload}>
                    <label>Category Name:</label>
                    <input name="name" type="text" />

                    <label>Category Budget:</label>
                    <textarea name="budget"></textarea>

                    <button>Submit</button>
                </form>
            </React.Fragment>
        )
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     //mispelled categoryCreate dispatch(categoryCategory(payload))

//     categoryCreate : (payload) => dispatch(categoryCreate(payload)),
//     // categoryTest : () => dispatch(categoryTest())
// })
// const mapStateToProps = state => ({
//     category : state
// })

// export default connect(mapStateToProps,mapDispatchToProps)(CategoryForm)