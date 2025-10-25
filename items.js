const posts = []

const items = [
    // Array Format: photo, href link, alt text, id
    ['https://lh3.googleusercontent.com/pw/AP1GczNe5-3HK8LoWfvPRdJi6K7l8KsFMulG6rSUcjVUQHpIyuSfzC361645uzhBVZJMrvMeMtfPkJHOGvqeMh6KcUrLgK2tQCdH0wdND0IyjBZPkY42jdQ=w2400', "Face.html", 'Face', 'customFontProject'],
    ['https://lh3.googleusercontent.com/pw/AIL4fc9M06b06vwZQPiWHvZ8q0nC8ZaRs1BAEQ8OCj9rp9fG-2xVZpINEKnUttRYqM2crWoo_mNgKfaQ9Forl5XYAKf3BevqwHl4ZqUH6l2IEVjFw2efM6M=w2400', "Ebadov.html", 'Custom Font Project', 'ebadovProject'],
    ['https://lh3.googleusercontent.com/pw/AIL4fc_dngXYv5U-4Y3ZhoINs033rw5kIDr9ReJDBS62LZNdvzYd20f96oHi563oLcGcFckadfw7kIXhQ068dag7QY7LhVIRXRpOIFO3mNRSaiSVmSqD6A0=w2400', "Urnes.html", 'Urnes Stave Church Logo', 'urnesStaveChurchLogo'],
    ['https://lh3.googleusercontent.com/pw/AIL4fc9NE_frZya_PrupzjAu9awb7w0IJelC6DwwLrvbz57VJR3C0x6_oqF1jW2Au8LPHG32Te8t2_rOLxY1Djwyk0-l3BztO3J0ubm38Ljy-8T_ajWZ204=w2400', "AgingEyes.html", 'Aging Eyes: Medical Poster', 'agingEyes'],
    ['https://lh3.googleusercontent.com/pw/AIL4fc-Z_Za6z76a01AkEBvsA4CD3tvVCgCLu7no0qRHgZsG99JLqgYbJdTpfs5GU9GYWFRH7WIbWocU1NE6JTDn2f7CjvGZR7IeNxAe45wN-tOLVSnLBMY=w2400', "japanJournals.html", 'Japan Journal Entry', 'japanJournalEntry'],
    ['https://lh3.googleusercontent.com/pw/AIL4fc99vmSqj_6pyM5t2OXH8FlvhGUkZwi39YQ-LddKs1IGU6qRlQUIlZ27Usuaf1i6KTUNnQUPJ5yvlLPrHncfNjPLXpes4y7M7XDLJ3IEE25CkMcdGqk=w2400', "typography.html", 'Rockwell Square Serif Book Project', 'rockwellSquareSarif'],
    ['https://lh3.googleusercontent.com/pw/AP1GczN42K2Yvuk2Xm6LTN1EdjL27oaciso9vDekOJBYre0D7fUqdscsfxruJj7yrOKjAjRACSum5fvbv9DE_YoOdkgb6v0RqPT84b7QtN8FjAG_v0ZeNWs=w2400', "GiantShoulders.html", 'Giant Shoulders', 'giantShoulders'],
    ['https://lh3.googleusercontent.com/pw/AP1GczNJ35-hXlpedt-MxXSaf2-S_O0X7eyLYSrUGLCrM9O4ORTgpPQJqth6SaSGW9zxjnVdoqo-FeS5EOLCEnwbfNA0oeegU_yrKboJEVNu2Ih18YClL8w=w2400', "NatureTrackFlyers.html", 'NatureTrackFlyers'],
    ['https://lh3.googleusercontent.com/pw/AIL4fc8jou6ms6nsVhkWWI8YvZedoyTIvvV6BdVXurOSp8JDY5M8yBC3uI2oaJDrSkY2O0OS2vmoA6f2L8t9bAJ3qsJjVwwPcSuTTuv_BWr7VsJJ9QGU0q0=w2400', "A&D.html", 'Designing Futures', 'designingFutures'],
    ['https://lh3.googleusercontent.com/pw/AIL4fc_mIPrGduF9iZpX0Yl-3euGJut_L64TS8WLq1dwYLiBhkfGG9-fDFzZztg0U44E7_xFdI7o7XD9lcl8XtqipqaWtstEQl9igI1vsx6ncdu056zM2Bk=w2400', "SSHERI.html", 'SSHERI PFAS Project', 'ssheriPFASProject'],
    ['https://lh3.googleusercontent.com/pw/AIL4fc-Nda7342lIecJQT-44KQgoX4orRJXSIE9HuohenogQLjiNto42Ozjy38vFwUsF2xfSGfDSwu8YyiuLVpl3n3IYVjGITx8KLvlSZg7foKZbQLA3B-o=w2400', "Ralph.html", 'Ralph Applebaum Exhibition Poster', 'ralphApplebaumExhibition'],
    ['https://lh3.googleusercontent.com/pw/AP1GczO6T0IbZjiHPhELtmL1skIYrUkKlKSVNNMLwSmo-2qjVA_jnpsxnYxpdfHSlzP7FY5wDb-y4rvOQJsknh7xKyXnt04PWRVMxqnf3UkmmV27SIEsZ8w=w2400', "fitzco-static.html", "Fitz & Co. Static Works", 'fitzcoStatic'],
    ['https://lh3.googleusercontent.com/pw/AP1GczO60g4HvCUSKQaobjRpB4QDSP2oW4pUjv3Fw9q8nbjNcpZyDzrt9yWUg54zCvZHeSnqhw-GkcscTURPfLceWCsktgNiTsPp8Gja6LzdV-GMubk3ZSI=w2400', "Prints.html", "Prints", 'printWorks'],
    ['https://lh3.googleusercontent.com/pw/AP1GczPyIUiufmjSOuRxYrP6WATrBA_qZsVA1ouHhcf-4p1kPj_49ggvc3roeVartarhmUZW3ZErbJceTRPZ2onoB9t-hxeqC9wqKXPdv_s0QlXvu9QY0jc=w2400', "AvenueMetamorphosis.html", 'Metamorphosis for Avenue Magazine', 'metamorphosisAvenue'],
    ['https://lh3.googleusercontent.com/pw/AP1GczPLhowb1AjGtJuRJPUHOFGSGDqBXEztMM7NOOOqDw_7xs2AdCFyT6gfZqN8AMOVDNDAcv37mEcgUMQcCazZTcb-7_6DCshIn66AC5kx0ejrca1P1PA=w2400', "AvenueLiminal.html", 'Liminal for Avenue Magazine', 'liminalAvenue'],
    ['https://lh3.googleusercontent.com/pw/AIL4fc_4Baz0G6BHkMmpcVi6Kdht1yNAQuUSnRlDE98ZYOZGFZ_jvRMmMRHz9sm-_mlHQyvFF5m5m2R50z_daPdV_0wIRG4uchgCJ61nr3QmBxaTBiN70OU=w2400', "Snowfall.html", 'Snowfall', 'snowfall'],
    ['https://lh3.googleusercontent.com/pw/AIL4fc8t6x2P91GktidIERvBXr9orP1HpRNNUsra_h6dgt3pLGds68omhqRJoeCbv_UsYx5eXlG2UvtwmOohQSbnvMen83BRlpyWp4sQX1GEXgU3GQmhvCY=w2400', "Drawings.html", 'Point', 'pointDrawings'],
    ['https://lh3.googleusercontent.com/pw/AIL4fc_EZeszumi6wlCjJP2Yf03HJkm4trPaiGRCMC5u-28KQbIy5Xfoslzu6nKicsdbNX1JYH4gm3mfGtVHgLfKrv65ecFsDCLPbnLaQkgdOai5L-iYoRQ=w2400', "Commissions.html", 'Montie Album Cover', 'montieAlbumCover'],
    ['https://lh3.googleusercontent.com/pw/AIL4fc-0Ttob1FknZa8BWeFkOGng6AssokbJjbOf-XodQBTNS8xc13ntYV7BWKbpT7pKuIrNiHPwy0Wm2HmvTqKpDeVX2Ov8fYYzfuC_rIRid7pxbvGvIWc=w2400', "Avenue.html", 'August and Jarriah for Avenue Magazine', 'augustJarriahAvenueMagazine'],
    ['https://lh3.googleusercontent.com/pw/AIL4fc-7M9u19F_ve0guk5YTs66AjrOTjtu9BWsMv_3x3CD-Mzn01J704XrkiUp3mp6pjryOZJUsWncGnMlOdDH8cnNz1R_74hX_ajq9n75iUeLSy-mVUW8=w2400', "Esque.html", 'Esque Magazine', 'esqueMagazine'],
    ['https://lh3.googleusercontent.com/pw/AIL4fc_i4tyuIVR7oNMnsAoSxDSWD2-fccHvq88jXIE5Mo74Nl73tVSbT8J_36SsWpd2_TwmXaeC_ln93hEBGngiwOvAabrZYu7CfWNE18JOHuWUVJ4bt1Q=w2400', "NewJersey.html", 'New Jersey Scraps', 'newJerseyScraps'],
    ['https://lh3.googleusercontent.com/pw/AIL4fc-PqppaO7JnxC24i8LBJCsbdEbUBGM80AX3vsh72Lswl_8N_q7Lqvf7WMiVbOViv8fk5jYEBHXkIFelTxOrEQBstV2jml44LX_QBIRSTsU64TMcZ0Y=w2400', "Nora.html", 'Nora for Avenue Magazine', 'noraAvenueMagazine'],
    ['https://lh3.googleusercontent.com/pw/AIL4fc-SEwy0ATXYXI2xQQQnd7lAipJNmudu0tU35oWO4c9yD8ILPvLYmsnpMCuzZdZqdupPpvB6oOT0-sdaYqe_p2bXdlqQ_1OYDsIIb_hu4SFsi5G-uMU=w2400', "Film.html", 'Miscelaneous Film Photos', 'miscFilm'],
    ['https://lh3.googleusercontent.com/pw/AP1GczM9T8ii-YBBMCTsdQlc42Gs50N2QtdzgoHRdE6Vaoz9Iyx_QqdI2fuE2AsSkwnMchu3l2W3RBrw8UEOljsajjQ_r7aYByhMBKzH_4uiUhnfnO4Pxws=w2400', "BirdsMusicVideo.html", 'Birds Music Video', 'birdsMusicVideo'],
    ['https://lh3.googleusercontent.com/pw/AP1GczOrzKHo9TaCg7XOub6DfNntppE0snaMRlHsvIYUo2DdspYuW6jeZ6bmW5IFE3LfXoTgZzL2n0SSZKOsz2b-a7cQT1CVojNF_vp9cI5wY_MfIWq5MtI=w2400', "FitzCoVideos.html", 'Fitzo Co. Videos', 'fitzCoVideos'],
    ['https://lh3.googleusercontent.com/pw/AIL4fc_QTc2jwktafFa5M6j98RLutl-gpcoTJq7I7zD6UKVjlZdfl0Qvi3L55tav9rHSNj8S_s9cmfrxLPHoUeRLMpy4Z87BwNhU0_EwhuA6fMrwSZZIPRs=w2400', "Kardashian.html", "Kardashian Gif", 'kardashianVideo'],
    ['https://lh3.googleusercontent.com/pw/AIL4fc-sAyWFhIhU8sRmY5tCU7zLyeGg0yyF2elWXDRaEKiwO6iXsD_JC549R3Mhrv_v-YVbr_ViflebBMVWK_8xcPJl8MlDOncN2VUXKawa2HNblQKsbf4=w2400', "JapanVideo.html", "Japan Video", 'japanVideo'],
    ['https://lh3.googleusercontent.com/pw/AP1GczNeIDaN0nhl7HdLndpCffzphJHeX9gXISNEeRp-1rs6cFSGsFMmRUjsp1i2waXV7MYuzEQJ-XNMBXujtn1win0cqndHFpLr-XH3N3LPmEt5McwO4Sw=w2400', "NatureTrackVideo.html", "Nature Track Videos", 'natureTrackVideo'],
    ['https://lh3.googleusercontent.com/pw/AIL4fc_zJFdkJ3VS2sEJxhMOZ_5cnY1YhkyeaAeuQO9L7jUyhnCDyO6pLdvtrTKW3aEQUykoCElZpcWCFxhyDH3CifFn0p0mRRR_l-eiGNtzLqpF5mnZMTs=w2400', "Crud.html", 'Crud Animation', 'crudAnimation']

]


let imageIndex = 0;

for(let i = 0; i < items.length; i++){
    let currentItem = items[i];
    let item = {
        id: currentItem[3],
        photoLink: currentItem[1],
        title: currentItem[2],
        image: currentItem[0],

    }
    posts.push(item);
    imageIndex++;
    if (imageIndex > items.length - 1) imageIndex = 0;
}
