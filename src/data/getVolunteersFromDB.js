
import { getVolunteersFromDb } from '@/lib/volunteers.service';
import {cache} from 'react'

const getVolunteersFromDB = cache( () => {
    return getVolunteersFromDb();
});

export default getVolunteersFromDB;