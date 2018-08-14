import React from 'react'
import CategoryItem from '../category-item/CategoryItem.js'
import CategoryForm from '../category-form/CategoryForm.js'
import { categoryCreate, categoryDestroy, categoryUpdate } from '../../action/actions.js'
import { connect } from 'react-redux';

// import uuidv1 from 'uuid/v1'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            note: {
                id: '',
                name: '',
                budget: '',
            },
            // notes: [],
            updateId: ''
        }
        // this.addNote = this.addNote.bind(this)
        this.removeCategory = this.removeCategory.bind(this)
        this.updateCategory = this.updateCategory.bind(this)
        this.updateMode = this.updateMode.bind(this)
        this.cancelUpdate = this.cancelUpdate.bind(this)
        // this.populateCategoryObj = this.populateCategoryObj.bind(this)
    }

    updateCategory(e) {
        const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({note: {...this.state.note,[e.target.name] : val}})
    }

    updateMode(e) {
        let updateId = e.target.getAttribute('name')
        this.setState({
            updateId
        })
        // need to do this in a callback back in NoteUpdateForm?
        this.populateNoteObj(updateId);
    }
    cancelUpdate() {
        let id = '';
        let editing = false;
        let completed= false;
        let content= '';
        let title= '';
        let note = {...this.state.note, id, editing, completed, content, title}
        this.setState({
            note,
            updateId : ''
        })
    }
    removeCategory(e) {
        // console.log('redux state',this.props.category[0].name)
        //its expecting th entire object but im just going to try passing it the id
        e.preventDefault()
        // console.log('target id',e.target.name)
        this.props.categoryDestroy(e.target.name)
    }

//     populateNoteObj(updateId) {
//         for(let note of this.state.notes) {
//             if(note.id === updateId) {
//                 this.setState({note});
//             }
//         }
//     }

//     addNote() {
//         let id;
//         if(!this.state.updateId){
//             id = uuidv1();
//             let newNote = {...this.state.note, id}
//             this.setState({notes : [...this.state.notes, newNote]})
//         } else {
//             id = this.state.updateId
//             let newArr = this.state.notes.map( note => {
//                 if(note.id === this.state.updateId){
//                      note = {...this.state.note,id}
//                 }
//                 return note
//             })
//             this.setState({
//                 notes : newArr,
//                 updateId : ''
//             })
//         }
//     }

//     removeNote(note) {
//         let newArr = [...this.state.notes]
//         let index;
//         for ( let i of this.state.notes) {
//           if(i['id'] === note) {
//             index = newArr.indexOf(i)
//           }
//         }
//         newArr.splice(index,1)
//         this.setState(() => ({
//             notes: newArr
//         }))
//     }

    render() {
        return (
            <React.Fragment>
                <CategoryForm categoryCreate={this.props.categoryCreate}/>
                <CategoryItem categoryUpdate={this.props.categoryUpdate} removeCategory={this.removeCategory} category={this.props.category}/>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    //mispelled categoryCreate dispatch(categoryCategory(payload))
    categoryCreate : (payload) => dispatch(categoryCreate(payload)),
    // categoryTest : () => dispatch(categoryTest())
    categoryDestroy : (payload) => dispatch(categoryDestroy(payload)),
    categoryUpdate : (payload) => dispatch(categoryUpdate(payload))
})
const mapStateToProps = state => ({
    category : state
})

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)