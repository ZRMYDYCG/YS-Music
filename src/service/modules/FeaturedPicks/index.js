import http from '../../config/index.js'

export const fetchFeaturedPicksBanners = () => http.get('/banner?type=0')
