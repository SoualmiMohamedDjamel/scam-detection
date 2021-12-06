import {Announcement} from './types';

export const ANNOUNCEMENT: Announcement = {
  contacts: {
    fisrtName: 'Christophe',
    lastName: 'Dupont',
    email: 'testdepot@yopmail.fr',
    phone1: {
      value: '0607080901'
    }
  },
  creationDate: '2020-01-09T09:02:22.610Z',
  price: 19000,
  publicationoption: ['STRENGTHS', 'BOOST_VO'],
  reference: 'B300053623',
  vehicle: {
    make: 'HPNDA',
    model: 'CR-V',
    version: 'IV (2) 1.6 I-DTEC 160 4WD EXCLUSIVE NAVI AT',
    category: '',
    registerNumber: 'AA123AA',
    mileage: 100000
  }
};

export const ANNOUNCEMENT_WITH_SECCESS: Announcement = {
  contacts: {
    fisrtName: 'Christophe',
    lastName: 'Dupont',
    email: 'testdepot@yopmail.fr',
    phone1: {
      value: '0607080901'
    }
  },
  creationDate: '2020-01-09T09:02:22.610Z',
  price: 36000,
  publicationoption: ['STRENGTHS', 'BOOST_VO'],
  reference: 'B300053623',
  vehicle: {
    make: 'HPNDA',
    model: 'CR-V',
    version: 'IV (2) 1.6 I-DTEC 160 4WD EXCLUSIVE NAVI AT',
    category: '',
    registerNumber: 'NOT_BLACK_LISTED',
    mileage: 100000
  }
};

export const ANNOUNCEMENT_WITH_ERRORS: Announcement = {
  contacts: {
    fisrtName: 'ch',
    lastName: 'du',
    email: 'te***++-585547854@yopmail.fr',
    phone1: {
      value: '0607080901'
    }
  },
  creationDate: '2020-01-09T09:02:22.610Z',
  price: 5000,
  publicationoption: ['STRENGTHS', 'BOOST_VO'],
  reference: 'with_error',
  vehicle: {
    make: 'HPNDA',
    model: 'CR-V',
    version: 'IV (2) 1.6 I-DTEC 160 4WD EXCLUSIVE NAVI AT',
    category: '',
    registerNumber: 'AA123AA',
    mileage: 100000
  }
};
