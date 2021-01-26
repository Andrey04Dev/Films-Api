import { Router } from 'express'
import {tableFilms} from '../../db/db'
const router = Router();

router.get('/', async(req,res)=>{
    const allFilms =  await tableFilms.findAll()
    res.json(allFilms)
    console.table({allFilms})
})

router.post('/', async(req,res)=>{
    const createFilms =  await tableFilms.create(req.body)
    res.json(createFilms)
    console.table(createFilms)
})

router.put('/:id', async(req,res)=>{
    const updateFilms =  await tableFilms.update(req.body,{ where:{id:req.params.id}})
    res.json('Success')
    console.table(updateFilms)
})

router.delete('/:id', async(req,res)=>{
    const deleteFilms =  await tableFilms.destroy({ where:{id:req.params.id}})
    res.json('It was delete')
    console.table(deleteFilms)
})
export default router