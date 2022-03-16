<template>
  <section class="hiring-section mb-5">
    <div class="container-fluid p-5 banner_section">
      <div class="row">
        <div class="col-md-5 d-flex justify-content-center">
          <img src="~/assets/images/hiring_banner.svg" alt="banner" class="img-fluid banner d-block">
        </div>
        <div class="col-md-7 d-flex flex-column justify-content-center align-items-start mt-4 mt-md-0">
          <h1 class="hire-title text-center">Designers for Hire</h1>
          <p class="text-md-center mt-4 hire-desc text-left">Find the world’s best designers on DesignHouse – the largest independent community for digital designers.</p>
        </div>
      </div>
    </div>
    <div class="container-fluid px-4">
      <div class="row">
        <div class="col-md-4">
          <form class="">
            <div class="card mb-4 search-section">
            <div class="card-body">
              <div class="form-group mb-3">
                <label for="exampleInputEmail1">Keyword Search</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              </div>
              <div class="form-group mb-3">
                <label for="exampleFormControlSelect1">Example select</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <fieldset class="form-group d-flex flex-column">
                <legend class="col-form-label float-sm-left pt-0">Specialties</legend>
                <div class="">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                    <label class="form-check-label" for="gridRadios1">
                      Animation
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                    <label class="form-check-label" for="gridRadios2">
                      Brand / Graphic Design
                    </label>
                  </div>
                  <div class="form-check ">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" >
                    <label class="form-check-label" for="gridRadios3">
                      Illustration
                    </label>
                  </div>
                  <div class="form-check ">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" >
                    <label class="form-check-label" for="gridRadios3">
                      Leadership
                    </label>
                  </div>
                  <div class="form-check ">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" >
                    <label class="form-check-label" for="gridRadios3">
                      Mobile Design
                    </label>
                  </div>
                  <div class="form-check ">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" >
                    <label class="form-check-label" for="gridRadios3">
                      UI / Visual Design
                    </label>
                  </div>
                  <div class="form-check ">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" >
                    <label class="form-check-label" for="gridRadios3">
                      Product Design
                    </label>
                  </div>
                  <div class="form-check ">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" >
                    <label class="form-check-label" for="gridRadios3">
                      UX Design / Research
                    </label>
                  </div>
                  <div class="form-check ">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" >
                    <label class="form-check-label" for="gridRadios3">
                      Web Design
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
              <div class="form-group mb-3 p-3">
                <base-gmap @address-response="handleAddress" :initialValue="form.formatted_address"></base-gmap>
              </div>
              <div class="form-group p-3">
                <button class="py-2 px-4 text-white bg-info btn float-right rounded shadow">Search</button>
              </div>
            </div>

          </form>
        </div>
        <div class="col-md-8">
         <div class="designer-list">
           <div class="card">
             <div class="row no-gutters">
               <div class="col-md-4">
                 <div class="p-3">
                   <img src="https://cdn.dribbble.com/assets/landing-pages/hiring/Lilla_Bardenova@2x-d1552e8f8369cfe2b4d380484ab87b3110d6dea3251ee3d975fd4025b3d2ec15.png"
                        alt="designer" class="img-fluid designer-image">
                 </div>
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h4 class="font-18">Ricky</h4>
                   <span class="address px-2 py-1 bg-dark text-white shadow-sm rounded font-13">Boston, MA</span>
                   <span class="d-block mt-2">Web Development, UI/UX, Mobile Development</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="card">
             <div class="row no-gutters">
               <div class="col-md-4">
                 <div class="p-3">
                   <img src="https://cdn.dribbble.com/assets/landing-pages/hiring/Lilla_Bardenova@2x-d1552e8f8369cfe2b4d380484ab87b3110d6dea3251ee3d975fd4025b3d2ec15.png"
                        alt="designer" class="img-fluid designer-image">
                 </div>
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h4 class="font-18">Ricky</h4>
                   <span class="address px-2 py-1 bg-dark text-white shadow-sm rounded font-13">Boston, MA</span>
                   <span class="d-block mt-2">Web Development, UI/UX, Mobile Development</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="card">
             <div class="row no-gutters">
               <div class="col-md-4">
                 <div class="p-3">
                   <img src="https://cdn.dribbble.com/assets/landing-pages/hiring/Lilla_Bardenova@2x-d1552e8f8369cfe2b4d380484ab87b3110d6dea3251ee3d975fd4025b3d2ec15.png"
                        alt="designer" class="img-fluid designer-image">
                 </div>
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h4 class="font-18">Ricky</h4>
                   <span class="address px-2 py-1 bg-dark text-white shadow-sm rounded font-13">Boston, MA</span>
                   <span class="d-block mt-2">Web Development, UI/UX, Mobile Development</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="card">
             <div class="row no-gutters">
               <div class="col-md-4">
                 <div class="p-3">
                   <img src="https://cdn.dribbble.com/assets/landing-pages/hiring/Lilla_Bardenova@2x-d1552e8f8369cfe2b4d380484ab87b3110d6dea3251ee3d975fd4025b3d2ec15.png"
                        alt="designer" class="img-fluid designer-image">
                 </div>
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h4 class="font-18">Ricky</h4>
                   <span class="address px-2 py-1 bg-dark text-white shadow-sm rounded font-13">Boston, MA</span>
                   <span class="d-block mt-2">Web Development, UI/UX, Mobile Development</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="card">
             <div class="row no-gutters">
               <div class="col-md-4">
                 <div class="p-3">
                   <img src="https://cdn.dribbble.com/assets/landing-pages/hiring/Lilla_Bardenova@2x-d1552e8f8369cfe2b4d380484ab87b3110d6dea3251ee3d975fd4025b3d2ec15.png"
                        alt="designer" class="img-fluid designer-image">
                 </div>
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h4 class="font-18">Ricky</h4>
                   <span class="address px-2 py-1 bg-dark text-white shadow-sm rounded font-13">Boston, MA</span>
                   <span class="d-block mt-2">Web Development, UI/UX, Mobile Development</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="card">
             <div class="row no-gutters">
               <div class="col-md-4">
                 <div class="p-3">
                   <img src="https://cdn.dribbble.com/assets/landing-pages/hiring/Lilla_Bardenova@2x-d1552e8f8369cfe2b4d380484ab87b3110d6dea3251ee3d975fd4025b3d2ec15.png"
                        alt="designer" class="img-fluid designer-image">
                 </div>
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h4 class="font-18">Ricky</h4>
                   <span class="address px-2 py-1 bg-dark text-white shadow-sm rounded font-13">Boston, MA</span>
                   <span class="d-block mt-2">Web Development, UI/UX, Mobile Development</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="card">
             <div class="row no-gutters">
               <div class="col-md-4">
                 <div class="p-3">
                   <img src="https://cdn.dribbble.com/assets/landing-pages/hiring/Lilla_Bardenova@2x-d1552e8f8369cfe2b4d380484ab87b3110d6dea3251ee3d975fd4025b3d2ec15.png"
                        alt="designer" class="img-fluid designer-image">
                 </div>
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h4 class="font-18">Ricky</h4>
                   <span class="address px-2 py-1 bg-dark text-white shadow-sm rounded font-13">Boston, MA</span>
                   <span class="d-block mt-2">Web Development, UI/UX, Mobile Development</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="card">
             <div class="row no-gutters">
               <div class="col-md-4">
                 <div class="p-3">
                   <img src="https://cdn.dribbble.com/assets/landing-pages/hiring/Lilla_Bardenova@2x-d1552e8f8369cfe2b4d380484ab87b3110d6dea3251ee3d975fd4025b3d2ec15.png"
                        alt="designer" class="img-fluid designer-image">
                 </div>
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h4 class="font-18">Ricky</h4>
                   <span class="address px-2 py-1 bg-dark text-white shadow-sm rounded font-13">Boston, MA</span>
                   <span class="d-block mt-2">Web Development, UI/UX, Mobile Development</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="card">
             <div class="row no-gutters">
               <div class="col-md-4">
                 <div class="p-3">
                   <img src="https://cdn.dribbble.com/assets/landing-pages/hiring/Lilla_Bardenova@2x-d1552e8f8369cfe2b4d380484ab87b3110d6dea3251ee3d975fd4025b3d2ec15.png"
                        alt="designer" class="img-fluid designer-image">
                 </div>
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h4 class="font-18">Ricky</h4>
                   <span class="address px-2 py-1 bg-dark text-white shadow-sm rounded font-13">Boston, MA</span>
                   <span class="d-block mt-2">Web Development, UI/UX, Mobile Development</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="card">
             <div class="row no-gutters">
               <div class="col-md-4">
                 <div class="p-3">
                   <img src="https://cdn.dribbble.com/assets/landing-pages/hiring/Lilla_Bardenova@2x-d1552e8f8369cfe2b4d380484ab87b3110d6dea3251ee3d975fd4025b3d2ec15.png"
                        alt="designer" class="img-fluid designer-image">
                 </div>
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h4 class="font-18">Ricky</h4>
                   <span class="address px-2 py-1 bg-dark text-white shadow-sm rounded font-13">Boston, MA</span>
                   <span class="d-block mt-2">Web Development, UI/UX, Mobile Development</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="card">
             <div class="row no-gutters">
               <div class="col-md-4">
                 <div class="p-3">
                   <img src="https://cdn.dribbble.com/assets/landing-pages/hiring/Lilla_Bardenova@2x-d1552e8f8369cfe2b4d380484ab87b3110d6dea3251ee3d975fd4025b3d2ec15.png"
                        alt="designer" class="img-fluid designer-image">
                 </div>
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h4 class="font-18">Ricky</h4>
                   <span class="address px-2 py-1 bg-dark text-white shadow-sm rounded font-13">Boston, MA</span>
                   <span class="d-block mt-2">Web Development, UI/UX, Mobile Development</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="card">
             <div class="row no-gutters">
               <div class="col-md-4">
                 <div class="p-3">
                   <img src="https://cdn.dribbble.com/assets/landing-pages/hiring/Lilla_Bardenova@2x-d1552e8f8369cfe2b4d380484ab87b3110d6dea3251ee3d975fd4025b3d2ec15.png"
                        alt="designer" class="img-fluid designer-image">
                 </div>
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h4 class="font-18">Ricky</h4>
                   <span class="address px-2 py-1 bg-dark text-white shadow-sm rounded font-13">Boston, MA</span>
                   <span class="d-block mt-2">Web Development, UI/UX, Mobile Development</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="card">
             <div class="row no-gutters">
               <div class="col-md-4">
                 <div class="p-3">
                   <img src="https://cdn.dribbble.com/assets/landing-pages/hiring/Lilla_Bardenova@2x-d1552e8f8369cfe2b4d380484ab87b3110d6dea3251ee3d975fd4025b3d2ec15.png"
                        alt="designer" class="img-fluid designer-image">
                 </div>
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h4 class="font-18">Ricky</h4>
                   <span class="address px-2 py-1 bg-dark text-white shadow-sm rounded font-13">Boston, MA</span>
                   <span class="d-block mt-2">Web Development, UI/UX, Mobile Development</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="card">
             <div class="row no-gutters">
               <div class="col-md-4">
                 <div class="p-3">
                   <img src="https://cdn.dribbble.com/assets/landing-pages/hiring/Lilla_Bardenova@2x-d1552e8f8369cfe2b4d380484ab87b3110d6dea3251ee3d975fd4025b3d2ec15.png"
                        alt="designer" class="img-fluid designer-image">
                 </div>
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h4 class="font-18">Ricky</h4>
                   <span class="address px-2 py-1 bg-dark text-white shadow-sm rounded font-13">Boston, MA</span>
                   <span class="d-block mt-2">Web Development, UI/UX, Mobile Development</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="card">
             <div class="row no-gutters">
               <div class="col-md-4">
                 <div class="p-3">
                   <img src="https://cdn.dribbble.com/assets/landing-pages/hiring/Lilla_Bardenova@2x-d1552e8f8369cfe2b4d380484ab87b3110d6dea3251ee3d975fd4025b3d2ec15.png"
                        alt="designer" class="img-fluid designer-image">
                 </div>
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h4 class="font-18">Ricky</h4>
                   <span class="address px-2 py-1 bg-dark text-white shadow-sm rounded font-13">Boston, MA</span>
                   <span class="d-block mt-2">Web Development, UI/UX, Mobile Development</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="card">
             <div class="row no-gutters">
               <div class="col-md-4">
                 <div class="p-3">
                   <img src="https://cdn.dribbble.com/assets/landing-pages/hiring/Lilla_Bardenova@2x-d1552e8f8369cfe2b4d380484ab87b3110d6dea3251ee3d975fd4025b3d2ec15.png"
                        alt="designer" class="img-fluid designer-image">
                 </div>
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h4 class="font-18">Ricky</h4>
                   <span class="address px-2 py-1 bg-dark text-white shadow-sm rounded font-13">Boston, MA</span>
                   <span class="d-block mt-2">Web Development, UI/UX, Mobile Development</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="card">
             <div class="row no-gutters">
               <div class="col-md-4">
                 <div class="p-3">
                   <img src="https://cdn.dribbble.com/assets/landing-pages/hiring/Lilla_Bardenova@2x-d1552e8f8369cfe2b4d380484ab87b3110d6dea3251ee3d975fd4025b3d2ec15.png"
                        alt="designer" class="img-fluid designer-image">
                 </div>
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h4 class="font-18">Ricky</h4>
                   <span class="address px-2 py-1 bg-dark text-white shadow-sm rounded font-13">Boston, MA</span>
                   <span class="d-block mt-2">Web Development, UI/UX, Mobile Development</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="card">
             <div class="row no-gutters">
               <div class="col-md-4">
                 <div class="p-3">
                   <img src="https://cdn.dribbble.com/assets/landing-pages/hiring/Lilla_Bardenova@2x-d1552e8f8369cfe2b4d380484ab87b3110d6dea3251ee3d975fd4025b3d2ec15.png"
                        alt="designer" class="img-fluid designer-image">
                 </div>
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h4 class="font-18">Ricky</h4>
                   <span class="address px-2 py-1 bg-dark text-white shadow-sm rounded font-13">Boston, MA</span>
                   <span class="d-block mt-2">Web Development, UI/UX, Mobile Development</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="card">
             <div class="row no-gutters">
               <div class="col-md-4">
                 <div class="p-3">
                   <img src="https://cdn.dribbble.com/assets/landing-pages/hiring/Lilla_Bardenova@2x-d1552e8f8369cfe2b4d380484ab87b3110d6dea3251ee3d975fd4025b3d2ec15.png"
                        alt="designer" class="img-fluid designer-image">
                 </div>
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h4 class="font-18">Ricky</h4>
                   <span class="address px-2 py-1 bg-dark text-white shadow-sm rounded font-13">Boston, MA</span>
                   <span class="d-block mt-2">Web Development, UI/UX, Mobile Development</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="card">
             <div class="row no-gutters">
               <div class="col-md-4">
                 <div class="p-3">
                   <img src="https://cdn.dribbble.com/assets/landing-pages/hiring/Lilla_Bardenova@2x-d1552e8f8369cfe2b4d380484ab87b3110d6dea3251ee3d975fd4025b3d2ec15.png"
                        alt="designer" class="img-fluid designer-image">
                 </div>
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h4 class="font-18">Ricky</h4>
                   <span class="address px-2 py-1 bg-dark text-white shadow-sm rounded font-13">Boston, MA</span>
                   <span class="d-block mt-2">Web Development, UI/UX, Mobile Development</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="card">
             <div class="row no-gutters">
               <div class="col-md-4">
                 <div class="p-3">
                   <img src="https://cdn.dribbble.com/assets/landing-pages/hiring/Lilla_Bardenova@2x-d1552e8f8369cfe2b4d380484ab87b3110d6dea3251ee3d975fd4025b3d2ec15.png"
                        alt="designer" class="img-fluid designer-image">
                 </div>
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h4 class="font-18">Ricky</h4>
                   <span class="address px-2 py-1 bg-dark text-white shadow-sm rounded font-13">Boston, MA</span>
                   <span class="d-block mt-2">Web Development, UI/UX, Mobile Development</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="card">
             <div class="row no-gutters">
               <div class="col-md-4">
                 <div class="p-3">
                   <img src="https://cdn.dribbble.com/assets/landing-pages/hiring/Lilla_Bardenova@2x-d1552e8f8369cfe2b4d380484ab87b3110d6dea3251ee3d975fd4025b3d2ec15.png"
                        alt="designer" class="img-fluid designer-image">
                 </div>
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h4 class="font-18">Ricky</h4>
                   <span class="address px-2 py-1 bg-dark text-white shadow-sm rounded font-13">Boston, MA</span>
                   <span class="d-block mt-2 font-13">Web Development, UI/UX, Mobile Development</span>
                 </div>
               </div>
             </div>
           </div>
         </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import background_banner from '~/assets/images/hiring_banner.svg';
export default {
  name: "hiring",
  data() {
    return {
      image:background_banner,
      form: this.$vform({
        tagline: '',
        name: '',
        email: '',
        about: '',
        formatted_address: '',
        location: {
          aa: '123',
          bb: '233'
        },
        available_to_hire: false
      })

    }
  },
  methods:{
    handleAddress(data) {
      this.form.formatted_address = data.formatted_address
      this.form.location.longitude = data.longitude
      this.form.location.latitude = data.latitude
    }
  }
}
</script>

<style scoped lang="scss">
.banner_section{
  margin-bottom: 20px;
 background: #E9ECFF;
  p{
    font-size: 16px;
  }
}
.banner{
  width: 350px;
}
.hire-title{
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  @media (min-width: 500px){
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
  }
}
.hire-desc{
  width: 95%;
  margin-top: 8px;
  color: #6e6d7a;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.designer-image{
  width: 80px;
}
.designer-list{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
  @media screen and (max-width:575px) {
  grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
  }
  @media screen and (max-width:767px) {
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  }
  gap: 15px;
  .card{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    border: none;
    span{
      font-size: 13px;
    }
  }
}
.search-section{
  border: none;

}
</style>
