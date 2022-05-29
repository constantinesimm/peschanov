<template>
    <d-row>
        <d-col class="no-pd-left">
            <d-card-header  v-d-toggle.profile-block class="no-radius-left mb-1">
                <h5 class="card-title text-primary">Profile</h5>
            </d-card-header>
            <d-collapse visible id="profile-block">
                <d-card-body class="no-pd-top">
                    <d-row>
                        <d-col>
                            <d-card class="noshadow">
                                <d-card-body class="no-pd-left">
                                    <h5 class="card-title">Profile</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">
                                        <p><span class="font-weight-bold">Age</span>: 32</p>
                                        <p><span class="font-weight-bold">Location</span>: Kyiv</p>
                                    </h6>
                                </d-card-body>
                            </d-card>
                        </d-col>
                        <d-col>
                            <d-card class="noshadow">
                                <d-card-body class="no-pd-left">
                                    <h5 class="card-title">Education</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">
                                        <p><span class="font-weight-bold">Cherkasy State Business-College / 2006 - 2009</span></p>
                                        <p>"Software development for automated information systems"</p>
                                    </h6>
                                </d-card-body>
                            </d-card>
                        </d-col>
                    </d-row>
                    <d-row>
                        <d-col>
                            <d-card class="noshadow">
                                <d-card-body class="no-pd-left">
                                    <h5 class="card-title">Languages</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">
                                        <p><span class="font-weight-bold">Ukrainian</span>: Native</p>
                                        <p><span class="font-weight-bold">Russian</span>: Fluent</p>
                                        <p><span class="font-weight-bold">English</span>: Pre-intermediate</p>
                                    </h6>
                                </d-card-body>
                            </d-card>
                        </d-col>
                        <d-col>
                            <d-card class="noshadow">
                                <d-card-body class="no-pd-left">
                                    <h5 class="card-title">Courses</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">
                                        <p>
                                            <span class="project-title text-primary font-weight-bold mr-2">Lektorium ekreative</span>
                                            <span class="project-period font-weight-bold mr-2">10/2019 – 04/2020</span><br>
                                            <span>"Node.js"</span>
                                        </p>
                                        <p>
                                            <span class="project-title text-primary font-weight-bold mr-2">Andersen Lab</span>
                                            <span class="project-period font-weight-bold mr-2">07/2019 – 09/2019</span><br>
                                            <span>"JavaScripts Basics"</span>
                                        </p>
                                    </h6>
                                </d-card-body>
                            </d-card>
                        </d-col>
                    </d-row>
                </d-card-body>
            </d-collapse>
        </d-col>
    </d-row>
</template>

<script>
    export default {
        name: 'ProfileBlock',
    }
</script>

<style scoped>
    .noshadow {
        box-shadow: unset;
    }
    .no-pd-left {
        padding-left: 0!important;
    }
    .no-pd-top {
        padding-top: 0!important;
    }
    .no-radius-left {
        border-radius: 0 .75rem .75rem 0;
    }
    .card-title {
        margin-bottom: 0;
    }
    .card-header {
        padding: 0.5rem 1.5rem;
        cursor: pointer;
    }
    .card-body {
        padding: 1rem 1.5rem 0 1.5rem;
    }
    .card-body > p {
        margin: 0;
    }
    .card-subtitle {
        margin-top: 0;
    }
    .card-subtitle > p {
        margin: 0;
        font-weight: 300;
        font-size: .9rem;
    }
</style>
