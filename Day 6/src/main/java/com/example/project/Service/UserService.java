    package com.example.project.Service;

    import java.security.Principal;

    import com.example.project.DTO.Request.PasswordRequest;         
    
    public interface UserService {
    
        void forgotPassword(PasswordRequest request, Principal principal);
    
    }