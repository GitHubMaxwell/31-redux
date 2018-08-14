import React from 'react'
// import { categoryDestroy, categoryUpdate } from '../../action/actions.js'
// import { connect } from 'react-redux';

// going to need access to the state and run a map to build LI with it
// mapStateToProps

export default class CategoryItem extends React.Component {
    constructor(props) {
        super(props)
        // this.removeCategory = this.removeCategory.bind(this)
        // this.updateCategory = this.updateCategory.bind(this)
    }

    // removeCategory(e) {
    //     // console.log('redux state',this.props.category[0].name)
    //     //its expecting th entire object but im just going to try passing it the id
    //     e.preventDefault()
    //     // console.log('target id',e.target.name)
    //     this.props.categoryDestroy(e.target.name)
    // }
    // updateCategory(e) {
    //     // console.log('redux state',this.props.category[0].name)
    //     //its expecting th entire object but im just going to try passing it the id
    //     e.preventDefault()
    //     // console.log('target id',e.target.name)
    //     this.props.categoryUpdate(payload)
    // }

    editView(e) {
        this.props.updateMode(e)
    }

    render() {
        return(
            <React.Fragment>
            {
                this.props.category.map((note) =>
                        <li className="note" name={note.id} key={note.id} onDoubleClick={this.editView}>
                            <h3>{note.name}</h3>
                            <p>{note.budget}</p>
                            <input type="button" onClick={this.props.removeCategory} name={note.id} value="delete"/>
                            {this.props.updateId === note.id && this.props.children}
                        </li>
                    )
            }
            {/* <p onClick={this.stateLog}>hello</p> */}
            </React.Fragment>
        )
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     categoryDestroy : (payload) => dispatch(categoryDestroy(payload)),
//     categoryUpdate : (payload) => dispatch(categoryUpdate(payload))
// })
// const mapStateToProps = state => ({
//     category : state
// })

// export default connect(mapStateToProps,mapDispatchToProps)(CategoryItem)