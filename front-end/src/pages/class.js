import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import ClassHeader from '../components/ClassHeader';

const IndividualClass = props => {
    const router = useRouter();

    return (
        <div>
            <ClassHeader color="bg-sky-500" name="Intro to Computer Science" code="CS101" posts="10" enrolled="60"/>
        </div>
    )

}

IndividualClass.propTypes = {};
export default IndividualClass;