
import { getVolunteersFromDb } from '@/services/volunteer.service';
import {cache} from 'react'

const getVolunteersFromDB = cache( () => {
    return getVolunteersFromDb();
});

export default getVolunteersFromDB;