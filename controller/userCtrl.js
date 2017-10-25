/**
 * Created by snail on 17-10-25.
 */
'use strict'

const PageResServer = require('../server/pageResServer');
const resCon = require('../frame/controller/responseConstruct');
const {CODE_NOT_LOGGED} = require('../constant/errorCode');
const log4jsHelper = require('../frame/log/log4jsHelper');
const pageResServer = new PageResServer();